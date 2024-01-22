import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart() {
  let state = useSelector((state) => {
    return state;
  });

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>이름</th>
            <th>재고</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td>{state.cart[i].id}</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td>안녕</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
