'use strict';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
	try {
		var info = gen[key](arg);
		var value = info.value;
	} catch (error) {
		reject(error);
		return;
	}
	if (info.done) {
		resolve(value);
	} else {
		Promise.resolve(value).then(_next, _throw);
	}
}

function _asyncToGenerator(fn) {
	return function () {
		var self = this,
			args = arguments;
		return new Promise(function (resolve, reject) {
			var gen = fn.apply(self, args);
			function _next(value) {
				asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
			}
			function _throw(err) {
				asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
			}
			_next(undefined);
		});
	};
}

function fetchUsers() {
	return _fetchUsers.apply(this, arguments);
}

function _fetchUsers() {
	_fetchUsers = _asyncToGenerator(
		/*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
			var userIDs, users;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch ((_context.prev = _context.next)) {
						case 0:
							_context.next = 2;
							return fetch('/users');

						case 2:
							userIDs = _context.sent;
							_context.next = 5;
							return Promise.all(
								userIDs.map(function (userID) {
									return fetch('/users/'.concat(userID));
								})
							);

						case 5:
							users = _context.sent;
							return _context.abrupt('return', users);

						case 7:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee);
		})
	);
	return _fetchUsers.apply(this, arguments);
}
