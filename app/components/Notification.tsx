import React, { useEffect } from 'react';

interface NotificationProps {
  text: String;
}

const Notification: React.FC<NotificationProps> = ({ text }) => {
	const [show, setShow] = React.useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setShow(false);
		}, 2000);
		return () => {
			clearTimeout(timeout);
		};
	}, [show]);

	return (
    <span className={`bg-white text-black  rounded-md text-center p-1 px-5 transition-opacity duration-300 ${show ? '' : 'opacity-0'}`}>
			{text}
    </span>
  );
};

export default Notification;