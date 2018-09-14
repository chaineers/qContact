<?php

# Include the Autoloader (see "Libraries" for install instructions)
require 'vendor/autoload.php';
use Mailgun\Mailgun;
$mailgun = new Mailgun('api_key', new \Http\Adapter\Guzzle6\Client());

# Instantiate the client.
$mgClient = new Mailgun('dfa1e5c04ef29b96b537c582e1704646-f45b080f-dcd9cfcb');
$domain = "sandboxe5fdb9db6b594f1a92a862b3da6ba8de.mailgun.org";

# Make the call to the client.
$result = $mgClient->sendMessage("$domain",
          array('from'    => 'Mailgun Sandbox <postmaster@sandboxe5fdb9db6b594f1a92a862b3da6ba8de.mailgun.org>',
                'to'      => 'lioncho <chowin21@gmail.com>',
                'subject' => 'Hello lioncho',
                'text'    => 'Congratulations lioncho, you just sent an email with Mailgun!  You are truly awesome!'));
# You can see a record of this email in your logs: https://app.mailgun.com/app/logs

# You can send up to 300 emails/day from this sandbox server.
# Next, you should add your own domain so you can send 10,000 emails/month for free.


?>