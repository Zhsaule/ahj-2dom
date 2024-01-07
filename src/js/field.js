export default function createField(size) {
  const field = document.createElement('div');
  field.className = 'field';

  for (let i = 0; i < size * size; i += 1) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.setAttribute('id', i);
    field.append(cell);
  }

  return field;
}
