import { useParams } from "react-router-dom";
import styled from 'styled-components';

let YellowBtn = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  height: 40px;
  border: 0px;
  background : ${ props => props.bg };
  color : ${ props => props.bg == 'blue' ? 'white' : 'black'};
  `;

function Detail(props) {

  let{id} = useParams();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={props.product[id].img} width="100%"/>
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.product[id].title}</h4>
          <p>{props.product[id].content}</p>
          <p>{props.product[id].price}원</p>
          <button className="btn btn-danger">주문하기</button>
          <YellowBtn bg="orange">장바구니</YellowBtn>
        </div>
      </div>
    </div>
  );
}

export default Detail;