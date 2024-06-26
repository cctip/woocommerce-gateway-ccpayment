
import { sprintf, __ } from '@wordpress/i18n';
import { registerPaymentMethod } from '@woocommerce/blocks-registry';
import { decodeEntities } from '@wordpress/html-entities';
import { getSetting } from '@woocommerce/settings';

const settings = getSetting( 'ccpayment_data', {} );

const defaultLabel = __(
	'CCPayment Payments'
);

const label = decodeEntities( settings.title ) || defaultLabel;
const icon = settings.icon;console.log(settings)
/**
 * Content component
 */
const Content = () => {
	return decodeEntities( settings.description || '' );
};
/**
 * Label component
 *
 * @param {*} props Props from payment API.
 */
const Label = () => {
	return (
		<span className="wc-block-components-payment-method-label">
		{label}
		<img
			src={icon}
			alt={label}
		/>
		</span>
	);
};
// const Label = ( props ) => {
// 	const { PaymentMethodLabel } = props.components;
// 	return <PaymentMethodLabel text={ label } icon={ icon } />;
// };

/**
 * CCPayment payment method config object.
 */
const CCPayment = {
	name: "CCPayment",
	label: <Label />,
	content: <Content />,
	edit: <Content />,
	canMakePayment: () => true,
	ariaLabel: label,
	supports: {
		features: settings.supports,
	},
};

registerPaymentMethod( CCPayment );
