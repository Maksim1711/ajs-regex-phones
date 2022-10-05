export default function phones(phone) {
  return `+${phone.replace(/^8\s/, '7').split(/[^\d]/).join('')}`;
}
