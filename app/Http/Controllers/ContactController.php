<?php

namespace App\Http\Controllers;

use App\Mail\ContactMessage;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function __invoke(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:100'],
            'email' => ['required', 'email:rfc', 'max:160'],
            'subject' => ['required', 'string', 'max:160'],
            'message' => ['required', 'string', 'min:10', 'max:3000'],
            'website' => ['nullable', 'string', 'max:0'],
            'privacy' => ['accepted'],
        ]);

        Mail::to(config('portfolio.contact_email'))->send(new ContactMessage(
            name: $validated['name'],
            email: $validated['email'],
            subjectLine: $validated['subject'],
            body: $validated['message'],
        ));

        return response()->json(['message' => 'Message sent.']);
    }
}
