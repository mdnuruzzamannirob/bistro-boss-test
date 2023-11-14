import Container from "../../components/Container";
import GridCardContainer from "../../components/GridCardContainer";
import SectionTitle from "../../components/SectionTitle";
import useFetch from "../../hooks/useFetch";
import OrderCard from "../shared/OrderCard";

const Features = () => {
  const { data, loader } = useFetch(`/menu.json`);

  const filterMenu = data?.filter((menu) => menu.category === "offered") || [];

  if (loader) {
    return (
      <p className="h-screen flex items-center justify-center">
        <span>Loading...</span>
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
