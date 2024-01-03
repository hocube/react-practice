import { useParams } from "react-router-dom";

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
        </div>
      </div>
    </div>
  );
}

export default Detail;