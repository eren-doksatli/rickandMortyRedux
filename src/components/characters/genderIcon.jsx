import {Text} from 'react-native';
import {genderTypes} from '../../utils/constants';
import {Man, Woman, Xrp} from 'iconsax-react-native';
import Colors from '../../theme/colors';

const GenderIcon = ({gender, size}) => {
  if (gender == genderTypes.MALE)
    return <Man size={size} color={Colors.BLACK} />;
  if (gender == genderTypes.FEMALE)
    return <Woman size={size} color={Colors.BLACK} />;

  if (gender == genderTypes.MALE)
    return <Xrp size={size} color={Colors.BLACK} />;
};
export default GenderIcon;
