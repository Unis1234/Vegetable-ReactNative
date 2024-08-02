
import { Button as RNButton } from 'react-native';

const Button = ({ title, onPress }) => (
  <RNButton title={title} onPress={onPress} />
);

export default Button;
