<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="Portfolio of Euro Dario Fuenmayor Contreras, senior full-stack developer specialized in Laravel, Vue, ServiceNow and embedded electronic systems.">
    <meta name="robots" content="index, follow">
    <meta name="theme-color" content="#135f70">
    <link rel="canonical" href="{{ url()->current() }}">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="preload" href="/eurox.jpg" as="image" fetchpriority="high">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Euro Fuenmayor | Senior Developer">
    <meta property="og:description" content="Laravel, Vue, ServiceNow and embedded systems engineering portfolio.">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:image" content="{{ url('/eurox.jpg') }}">
    <meta name="twitter:card" content="summary_large_image">
    <title>Euro Fuenmayor | Senior Developer</title>
    <script type="application/ld+json">{!! json_encode(['@context' => 'https://schema.org', '@type' => 'Person', 'name' => 'Euro Dario Fuenmayor Contreras', 'url' => url('/'), 'jobTitle' => 'Senior Developer', 'sameAs' => ['https://github.com/eurox', 'https://www.linkedin.com/in/euro-fuenmayor'], 'knowsAbout' => ['Laravel', 'Vue.js', 'ServiceNow', 'Embedded systems', 'Electronics engineering']], JSON_UNESCAPED_SLASHES) !!}</script>
    @vite('resources/js/app.js')
</head>
<body>
    <div id="app"></div>
    <noscript>This portfolio requires JavaScript to display its interactive content.</noscript>
</body>
</html>
