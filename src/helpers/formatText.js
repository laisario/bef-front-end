export default function capitalizeFirstLetter(str) {
  return str?.charAt(0).toUpperCase() + str?.slice(1);
}

export const titleCase = (s) =>
  s
    .replace(/^[-_]*(.)/, (_, c) => c.toUpperCase())
    .replace(/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase());

export function formatDate(dataString) {
  const data = new Date(dataString);
  
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');  // Mês é base 0, então adicionamos 1
  const ano = data.getFullYear();
  
  return `${dia}/${mes}/${ano}`;
}