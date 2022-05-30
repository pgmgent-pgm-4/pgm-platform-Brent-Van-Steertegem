const CurriculumComponent = () => {
  return (
    <table>
    <tr>
      <th colSpan={4}>2022-2023</th>
      <th colSpan={4}>2023-2024</th>
    </tr>
    <tr>
      <td colSpan={4}>Jaar 1</td>
      <td colSpan={4}>Jaar 2</td>
    </tr>
    <tr>
      <td colSpan={2}>Semester 1</td>
      <td colSpan={2}>Semester 2</td>
      <td colSpan={2}>Semester 3</td>
      <td colSpan={2}>Semester 4</td>
    </tr>
    <tr>
      <td>Periode 1</td>
      <td>Periode 2</td>
      <td>Periode 3</td>
      <td>Periode 4</td>
      <td>Periode 5</td>
      <td>Periode 6</td>
      <td>Periode 7</td>
      <td>Periode 8</td>
    </tr>
    {/* Learning lines */}
  </table>
  )
};

export default CurriculumComponent;