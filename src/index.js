export default function cleanPhoneNumber(phoneNumber) {
  return `+${phoneNumber.replace(/\D/g, '').replace(/^8(?=\d{10}$)/, '7')}`;
}
