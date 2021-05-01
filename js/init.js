
function removeAlert() {
	const container = document.getElementById('alert_depreceated');
	container.remove();
}

function continueToSite() {
	removeAlert();
}

function showAlert() {
	const container = document.createElement('main');
	const center = document.createElement('div');
	const title = document.createElement('h1');
	const message = document.createElement('p');
	const link = document.createElement('a');
	const button = document.createElement('button');

	const body = document.body;

	container.classList.add('container_alert');
	container.id = "alert_depreceated";
	center.classList.add('center_alert');
	title.classList.add('title_alert');
	message.classList.add('message_alert');
	link.classList.add('link_alert');
	button.classList.add('button_alert');

	title.textContent = "Warning!";
	message.innerHTML = "This site is depreciated<br/><br/>";

	link.innerHTML = "new Site<br/>";
	link.href = "https://marcos-dev-web.herokuapp.com/";

	button.textContent = "continue"
	button.addEventListener('click', continueToSite);

	message.appendChild(link);
	message.appendChild(button);

	center.appendChild(title);
	center.appendChild(message);

	container.appendChild(center);

	body.appendChild(container);

	return true;
}

showAlert();
