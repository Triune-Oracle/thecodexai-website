import { NextRequest, NextResponse } from 'next/server';
import { emailSchema } from '@/lib/validation';

// In-memory waitlist storage (replace with database in production)
const waitlist: Map<string, { email: string; joinedAt: Date; position: number }> = new Map();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    try {
      emailSchema.parse(email);
    } catch (error) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check if email already in waitlist
    if (waitlist.has(email.toLowerCase())) {
      return NextResponse.json(
        {
          message: 'Email already on waitlist',
          position: waitlist.get(email.toLowerCase())?.position,
        },
        { status: 409 }
      );
    }

    // Add to waitlist
    const position = waitlist.size + 1;
    waitlist.set(email.toLowerCase(), {
      email,
      joinedAt: new Date(),
      position,
    });

    return NextResponse.json(
      {
        message: 'Successfully added to waitlist',
        position,
        email,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const email = request.nextUrl.searchParams.get('email');

    if (!email) {
      return NextResponse.json(
        { message: 'Email parameter required' },
        { status: 400 }
      );
    }

    const entry = waitlist.get(email.toLowerCase());

    if (!entry) {
      return NextResponse.json(
        { message: 'Email not found on waitlist' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      email: entry.email,
      position: entry.position,
      joinedAt: entry.joinedAt,
      totalOnWaitlist: waitlist.size,
    });
  } catch (error) {
    console.error('Waitlist GET error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
