import {View, Image, Text} from 'react-native';
import {Icon} from '@shared/components';
import {Props} from './models';
import {styles} from './styles';
import {THEME} from '@shared/theme';
import Avatar from '@assets/images/cryptoAvatar.png';

const ProfileCard = ({
  containerStyle,
  name = '',
  email = '',
  portfolioUSD = '',
  lastIncome = '',
  profitPercentage = '',
}: Props) => (
  <View style={[styles.container, containerStyle]}>
    <View style={styles.header}>
      <View style={styles.ctnAvatar}>
        <Image source={Avatar} style={styles.avatar} />
      </View>
      <View style={styles.ctnUserData}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
      <View style={styles.ctnNotification}>
        <View style={styles.badge} />
        <Icon name="bell" color={THEME.COLORS.WHITE} size={15} />
      </View>
    </View>
    <View style={styles.ctnFinancialData}>
      <View>
        <Text style={styles.porfolio}>Portfolio</Text>
        <Text style={styles.portfolioUSD}>{portfolioUSD}</Text>
      </View>
      <View>
        <Text
          style={[
            styles.statistics,
            styles.lastIncome,
          ]}>{`+${lastIncome}%`}</Text>
        <Text style={styles.statistics}>{`+${profitPercentage}`}</Text>
      </View>
    </View>
  </View>
);

export default ProfileCard;
