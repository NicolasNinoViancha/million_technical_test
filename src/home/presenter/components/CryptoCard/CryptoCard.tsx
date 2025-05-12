import {TouchableOpacity, Text, View} from 'react-native';
import {Icon} from '@shared/components';
import {Props} from './models';
import {styles} from './styles';
import {THEME} from '@shared/theme';

const CryptoCard = ({
  name,
  symbol,
  priceUSD,
  percentChange24h,
  percentChange1h,
  percentChange7d,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.container}
      onPress={onPress}>
      <View style={styles.ctnIcon}>
        <Icon name="bitcoin" color={THEME.COLORS.WHITE} size={15} />
      </View>
      <View style={styles.ctnName}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.symbol}>{symbol}</Text>
      </View>
      <View style={styles.ctnDetails}>
        <Text style={[styles.name, styles.priceUSD]}>{`$ ${priceUSD}`}</Text>
        <View style={styles.ctnPercent}>
          <Text style={[styles.symbol, styles.percent]}>
            {percentChange7d}%
          </Text>
          <Text style={[styles.symbol, styles.percent, styles.percent24h]}>
            {percentChange24h}%
          </Text>
          <Text style={[styles.symbol, styles.percent, styles.percent1h]}>
            {percentChange1h}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default CryptoCard;
