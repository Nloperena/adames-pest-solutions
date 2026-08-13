<?php
/**
 * Plugin Name: Nexrena Forms Bridge (Adames)
 * Description: Forwards Ninja Forms submissions to the Nexrena CRM portal inbox.
 * Version: 1.0.0
 * Author: Nexrena
 *
 * Install: copy this folder to wp-content/plugins/ and activate,
 * or drop the folder under wp-content/mu-plugins/nexrena-forms-bridge/
 * (for mu-plugins, also add a loader file  see README).
 */

if (!defined('ABSPATH')) {
  exit;
}

const NEXRENA_ADAMES_SITE_KEY = 'adames';
const NEXRENA_FORMS_ENDPOINT = 'https://api.nexrena.com/api/forms/submit';
const NEXRENA_NINJA_WEBHOOK = 'https://api.nexrena.com/api/forms/webhook/ninja/adames';

/**
 * Server-side forward after Ninja Forms stores the submission.
 *
 * @param array<string,mixed> $form_data
 */
function nexrena_adames_forward_ninja_submission($form_data) {
  if (!is_array($form_data)) {
    return;
  }

  $fields_in = isset($form_data['fields']) && is_array($form_data['fields']) ? $form_data['fields'] : [];
  $by_key = [];
  foreach ($fields_in as $field) {
    if (!is_array($field)) {
      continue;
    }
    $key = isset($field['key']) ? (string) $field['key'] : '';
    $id = isset($field['id']) ? (string) $field['id'] : '';
    $value = isset($field['value']) ? $field['value'] : '';
    if ($key !== '') {
      $by_key[$key] = $value;
    }
    if ($id !== '') {
      $by_key[$id] = $value;
    }
  }

  $name = trim((string) ($by_key['12'] ?? $by_key['name_1533667946923'] ?? $by_key['fname'] ?? $by_key['name'] ?? ''));
  $email = strtolower(trim((string) ($by_key['15'] ?? $by_key['email_1533668019630'] ?? $by_key['email'] ?? '')));
  $phone = trim((string) ($by_key['18'] ?? $by_key['phone_1533668020218'] ?? $by_key['phone'] ?? ''));
  $message = trim((string) ($by_key['21'] ?? $by_key['comments_1533668034905'] ?? $by_key['message'] ?? $by_key['comments'] ?? ''));

  if ($name === '' || $email === '' || $message === '') {
    return;
  }

  $payload = [
    'siteKey' => NEXRENA_ADAMES_SITE_KEY,
    'formName' => 'contact',
    'name' => $name,
    'email' => $email,
    'phone' => $phone !== '' ? $phone : null,
    'message' => $message,
    'pageUrl' => home_url('/contact-us/'),
  ];

  // Prefer the typed submit endpoint (same as Astro site).
  wp_remote_post(NEXRENA_FORMS_ENDPOINT, [
    'timeout' => 12,
    'headers' => [
      'Content-Type' => 'application/json',
      'X-Site-Key' => NEXRENA_ADAMES_SITE_KEY,
    ],
    'body' => wp_json_encode($payload),
  ]);
}

add_action('ninja_forms_after_submission', 'nexrena_adames_forward_ninja_submission', 20, 1);

/** Load dual-submit bridge as a belt-and-suspenders client path. */
function nexrena_adames_enqueue_nf_bridge() {
  $src = 'https://adames-pest-solutions.vercel.app/nexrena-nf-bridge.js';
  wp_enqueue_script(
    'nexrena-nf-bridge',
    $src,
    [],
    '1.0.0',
    true
  );
}
add_action('wp_enqueue_scripts', 'nexrena_adames_enqueue_nf_bridge');
