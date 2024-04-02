import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import DownIcon from '@mui/icons-material/KeyboardArrowDown';

const BootstrapButton = styled(Button)({
	boxShadow: 'none',
	textTransform: 'none',
	gap: '0.25rem',
	padding: '0.25rem 0.5rem',
	color: 'white',
	backgroundColor: 'transparent',
	border: 'none',
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-around',
	'&:hover': {
		backgroundColor: 'rgba(255, 255, 255, 0.2)',
	},
	'&:active': {
		backgroundColor: 'rgba(255, 255, 255, 0.2)',
	},
});

const Span = styled('span')`
	font-size: 0.85rem;
	display: block;
`;

const StyledIcon = styled(DownIcon)({
	display: 'block',
	fontSize: '1.3rem',
});

export default function DropdownMenu(props) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [loading, setLoading] = React.useState(false);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<BootstrapButton
				id='demo-positioned-button'
				aria-controls='demo-positioned-menu'
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				<Span>{props.title}</Span>
				<Span>
					<StyledIcon />
				</Span>
			</BootstrapButton>
		</div>
	);
}
