if (process.env.NODE_ENV === 'production') {
	const control_port_class = require("@brightsign/legacy/controlport");

	const button = new control_port_class("BrightSign");
	const success = button.ConfigureAsInput(1);
	console.log(`Setup success ${success}`);

	while (true) {
		let pin_active = button.GetPinValue();
		if (pin_active) {
			console.log("Button pushed");
			break;
		}
	}

	console.log("Button was pushed. We're done here.");
}


