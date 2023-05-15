import * as S from './style';

function Button(props) {
	const {
		variant = 'default',
		shape = 'default',
		size = 'medium',
		fullWidth = false,
		children,
		...rest
	} = props;

	return (
		<S.Button
			variant={variant}
			shape={shape}
			size={size}
			fullWidth={fullWidth}
			disabled={!!props.disabled}
			{...rest}
		>
			{children}
		</S.Button>
	);
}
export default Button;
