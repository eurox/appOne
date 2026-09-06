<?php

namespace Tests\Feature;

use App\Mail\ContactMessage;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class ContactTest extends TestCase
{
    public function test_contact_message_is_validated_and_sent(): void
    {
        Mail::fake();

        $response = $this->postJson('/contact', [
            'name' => 'Test User',
            'email' => 'test@example.com',
            'subject' => 'Project enquiry',
            'message' => 'This is a sufficiently long test message.',
            'website' => '',
            'privacy' => true,
        ]);

        $response->assertOk();
        Mail::assertSent(ContactMessage::class);
    }

    public function test_honeypot_rejects_bots(): void
    {
        Mail::fake();

        $this->postJson('/contact', [
            'name' => 'Bot',
            'email' => 'bot@example.com',
            'subject' => 'Spam',
            'message' => 'This is unwanted automated content.',
            'website' => 'https://spam.example',
            'privacy' => true,
        ])->assertUnprocessable()->assertJsonValidationErrors('website');

        Mail::assertNothingSent();
    }
}
