import ProductList from "./ProductList";

const ProductPage = ({ products }) => {
  console.log("dd", products);
  //   const productList = products.map((products) => {
  //     return (
  //       <div className="ProductBox" key={products.id}>
  //         <div className="id">id: {products.id}</div>
  //         <div className="name">이름: {products.name}</div>
  //         <div className="body">내용: {products.body}</div>
  //       </div>
  //     );
  //   });
  return (
    <main className="ProductPage">
      <div>여기는 상품 목록</div>
      {/* <div>{products}</div> */}
      {/* {products.map((products) => {
        return (
          <div className="ProductBox" key={products.id}>
            <div className="id">id: {products.id}</div>
            <div className="name">이름: {products.name}</div>
            <div className="body">내용: {products.body}</div>
          </div>
        );
      })} */}
      {<ProductList products={products} />}
    </main>
  );
};

export default ProductPage;
