import { PropagateLoader } from "react-spinners";
import Container from "../../components/Container";
import GridCardContainer from "../../components/GridCardContainer";
import SectionTitle from "../../components/SectionTitle";
import OrderCard from "../../components/shared/OrderCard";
import useFetch from "../../hooks/useFetch";

const Features = () => {
  const { data, loader } = useFetch(`http://localhost:5001/api/v1/menu`);

  const filterMenu = data?.filter((menu) => menu.category === "offered") || [];

  if (loader) {
    return (
      <p className="h-screen flex items-center justify-center">
        <PropagateLoader color="#BB8506" />
      </p>
    );
  }

  return (
    <Container>
      <SectionTitle
        subHeading={"---Should Try---"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <GridCardContainer>
        {filterMenu?.map((data) => (
          <OrderCard key={data.id} data={data}></OrderCard>
        ))}
      </GridCardContainer>
    </Container>
  );
};

export default Features;
