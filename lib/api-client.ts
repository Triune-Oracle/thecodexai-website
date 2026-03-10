import axios, { AxiosInstance, AxiosError } from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';

class APIClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add response interceptor for error handling
    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        console.error('API Error:', error.message);
        throw error;
      }
    );
  }

  /**
   * Check if backend API is healthy
   */
  async checkHealth(): Promise<boolean> {
    try {
      const response = await this.client.get('/api/health');
      return response.status === 200;
    } catch (error) {
      console.error('Health check failed:', error);
      return false;
    }
  }

  /**
   * Submit email to waitlist
   */
  async submitWaitlist(email: string): Promise<{
    success: boolean;
    message: string;
    position?: number;
  }> {
    try {
      const response = await this.client.post('/api/waitlist', { email });
      return {
        success: true,
        message: response.data.message || 'Successfully added to waitlist',
        position: response.data.position,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message || 'Failed to join waitlist';
        throw new Error(message);
      }
      throw error;
    }
  }

  /**
   * Get waitlist position for email
   */
  async getWaitlistPosition(email: string): Promise<number | null> {
    try {
      const response = await this.client.get(`/api/waitlist/${email}`);
      return response.data.position;
    } catch (error) {
      console.error('Failed to get waitlist position:', error);
      return null;
    }
  }

  /**
   * Submit task to swarm
   */
  async submitTask(taskData: {
    title: string;
    description: string;
    email: string;
  }): Promise<{ taskId: string; status: string }> {
    try {
      const response = await this.client.post('/api/tasks', taskData);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to submit task');
      }
      throw error;
    }
  }

  /**
   * Get task status
   */
  async getTaskStatus(taskId: string): Promise<{
    id: string;
    status: 'pending' | 'processing' | 'completed' | 'failed';
    result?: string;
    error?: string;
  }> {
    try {
      const response = await this.client.get(`/api/tasks/${taskId}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to get task status');
      }
      throw error;
    }
  }
}

export const apiClient = new APIClient();
