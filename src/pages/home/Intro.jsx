import bg from "../../assets/home/chef-service.jpg";

const Intro = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="max-w-screen-2xl mx-auto p-40 bg-fixed"
    >
      <div className="text-center px-40 py-20 space-y-3 bg-white">
        <h3 className="text-2xl font-medium">Bistro Boss</h3>
        <p className="font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
          consequatur laborum? Officiis sapiente aut illo? Nesciunt quidem
          praesentium quas commodi optio quasi placeat maxime adipisci deserunt,
          voluptates necessitatibus in recusandae sed ex? Magni libero tempora
          pariatur, numquam praesentium aut dicta aspernatur corporis. Nulla ex
          quam consequuntur veniam sed atque nesciunt!
        </p>
      </div>
    </div>
  );
};

export default Intro;
