// components/icons/Icon.tsx

import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
	name: IconName;
}

type IconName = "home";
const icons = {
	home: (
		<svg
			width="800px"
			height="800px"
			viewBox="0 0 36 36"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			role="img"
			preserveAspectRatio="xMidYMid meet"
		>
			<path
				fill="#99AAB5"
				d="M30 33c-2.417 0-5-1.313-5-5c0-2.071 1.118-3.478 2.199-4.838c.423-.532.851-1.07 1.239-1.666C26.883 20.077 25.172 19 24 19v-2c1.621 0 3.603 1.133 5.382 2.67c.378-.995.618-2.177.618-3.67h2c0 2.169-.448 3.816-1.077 5.149c1.445 1.542 2.591 3.23 3.025 4.534c.688 2.066.483 4.228-.535 5.642C32.635 32.405 31.422 33 30 33zm-.13-10.052c-.368.53-.747 1.008-1.105 1.458C27.779 25.646 27 26.627 27 28c0 2.479 1.632 3 3 3c.784 0 1.387-.284 1.791-.845c.64-.888.741-2.395.261-3.839c-.327-.978-1.15-2.202-2.182-3.368z"
			></path>
			<path
				fill="#FFAC33"
				d="M21.252 10H9c-2.209 0-3.883 1.791-3.74 4l1.17 18c.144 2.209 1.775 4 3.645 4h10.102c1.869 0 3.501-1.791 3.645-4l1.171-18c.142-2.209-1.532-4-3.741-4z"
			></path>
			<path
				fill="#AAB8C2"
				d="M26 33H4a1 1 0 0 0-1 1v2h24v-2a1 1 0 0 0-1-1z"
			></path>
			<path
				fill="#FFAC33"
				d="M31 10a1 1 0 0 1-1-1V5.764l2.105-4.211a1 1 0 1 1 1.789.895L32 6.236V9a1 1 0 0 1-1 1z"
			></path>
			<path
				fill="#BE1931"
				d="M33.5 16h-.777c.172-.295.277-.634.277-1v-4c0-.738-.404-1.376-1-1.723V9a1 1 0 1 0-2 0v.277A1.99 1.99 0 0 0 29 11v4c0 .366.105.705.277 1H28.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"
			></path>
			<path
				fill="#99AAB5"
				d="M25 14a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2h-5a1 1 0 0 0-1 1z"
			></path>
			<path
				fill="#E1E8ED"
				d="M27 14a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v10z"
			></path>
			<path
				fill="#66757F"
				d="M25 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10z"
			></path>
			<path fill="#AAB8C2" d="M13 5h9v3h-9z"></path>
		</svg>
	),
	// Add more icons here
};

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
    const IconComponent = icons[name];
    if (!IconComponent) {
        console.warn(`Icon ${name} does not exist.`);
        return null;
    }
    return React.cloneElement(IconComponent, props);
};

export default Icon;
