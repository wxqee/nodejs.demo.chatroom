function divEscapedContentElement(message) {
	return $('<div></div>').text(message);
}

function divSystemContentElement(message) {
	return $('<div></div>').html('<i>' + message + '</i>');
}

// Processing raw user input
function processUserInput(chatApp, socket) {
	var message = $('#send-message').val();
	var systemMesasge;

	if (message.charAt(0) == '/') {
		systemMesasge = chatApp.processCommand(message);
		if (systemMesasge) {
			$('#messages').append(divSystemContentElement(systemMesasge));
		}
	} else {
		chatApp.sendMessage($('#room').text(), message);
		$('#messages').append(divEscapedContentElement(message));
		$('#messages').scrollTop($('#messages').prop('scrollHeight'));
	}
	$('#send-message').val('');
}

