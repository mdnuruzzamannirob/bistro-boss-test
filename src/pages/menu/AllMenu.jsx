import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover";
import bg from "../../assets/menu/banner3.jpg";
import SectionTitle from "../../components/SectionTitle";
import Container from "../../components/Container";
import useFetch from "../../hooks/useFetch";
import GridContainer from "../../components/GridContainer";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import MenuCard from "../../components/shared/MenuCard";
import { PropagateLoader } from "react-spinners";

const AllMenu = () => {
  const { data, loader, filterData } = useFetch(
    `http://localhost:5001/api/v1/menu`,
    "offered"
  );

  //   const offeredMenu = data?.filter((menu) => menu.category === "offered") || [];
  const dessertMenu = data?.filter((menu) => menu.category === "dessert") || [];
  const pizzaMenu = data?.filter((menu) => menu.category === "pizza") || [];
  const saladMenu = data?.filter((menu) => menu.category === "salad") || [];
  const soupMenu = data?.filter((menu) => menu.category === "soup") || [];
  const drinksMenu = data?.filter((menu) => menu.category === "drinks") || [];

  if (loader) {
    return (
      <p className="h-screen flex items-center justify-center">
        <PropagateLoader color="#BB8506" />
      </p>
    );
  }

  return (
    <Container className={"mt-0"}>
      <Helmet>
        <title>All Menu - Bistro Boss Restaurant</title>
      </Helmet>
      <Container className={"mt-0"}>
        <Cover
          bg={bg}
          title={"OUR MENU"}
          subTitle={"Would you like to try a dish?"}
        ></Cover>
        <div className="my-20">
          <SectionTitle
            subHeading="---Don't miss---"
            heading="TODAY'S OFFER"
          ></SectionTitle>
          <GridContainer>
            {filterData?.map((menu) => (
              <MenuCard key={menu.id} menu={menu}></MenuCard>
            ))}
          </GridContainer>
          <Link to={"/Shop-Now"} className="flex items-center justify-center">
            <Button title={"ORDER YOUR FAVORITE FOOD"}></Button>
          </Link>
        </div>
      </Container>

      <hr />

      <Container>
        <Cover
          bg={bg}
          title={"DESSERTS"}
          subTitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Cover>
        <GridContainer className="my-20">
          {dessertMenu?.map((menu) => (
            <MenuCard key={menu.id} menu={menu}></MenuCard>
          ))}
        </GridContainer>
        <Link
          to={`/Shop-Now`}
          state={"Dessert"}
          className="flex items-center justify-center"
        >
          <Button title={"ORDER YOUR FAVORITE DESSERT"}></Button>
        </Link>
      </Container>

      <hr />

      <Container>
        <Cover
          bg={bg}
          title={"PIZZA"}
          subTitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Cover>
        <GridContainer className="my-20">
          {pizzaMenu?.map((menu) => (
            <MenuCard key={menu.id} menu={menu}></MenuCard>
          ))}
        </GridContainer>
        <Link
          to={"/Shop-Now"}
          state={"Pizza"}
          className="flex items-center justify-center"
        >
          <Button title={"ORDER YOUR FAVORITE PIZZA"}></Button>
        </Link>
      </Container>

      <hr />

      <Container>
        <Cover
          bg={bg}
          title={"SALADS"}
          subTitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Cover>
        <GridContainer className="my-20">
          {saladMenu?.map((menu) => (
            <MenuCard key={menu.id} menu={menu}></MenuCard>
          ))}
        </GridContainer>
        <Link
          to={"/Shop-Now"}
          state={"Salad"}
          className="flex items-center justify-center"
        >
          <Button title={"ORDER YOUR FAVORITE SALAD"}></Button>
        </Link>
      </Container>

      <hr />

      <Container>
        <Cover
          bg={bg}
          title={"SOUPS"}
          subTitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Cover>
        <GridContainer className="my-20">
          {soupMenu?.map((menu) => (
            <MenuCard key={menu.id} menu={menu}></MenuCard>
          ))}
        </GridContainer>
        <Link
          to={"/Shop-Now"}
          state={"Soup"}
          className="flex items-center justify-center"
        >
          <Button title={"ORDER YOUR FAVORITE SOUP"}></Button>
        </Link>
      </Container>

      <hr />

      <Container>
        <Cover
          bg={bg}
          title={"DRINKS"}
          subTitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Cover>
        <GridContainer className="my-20">
          {drinksMenu?.map((menu) => (
            <MenuCard key={menu.id} menu={menu}></MenuCard>
          ))}
        </GridContainer>
        <Link
          to={"/Shop-Now"}
          state={"Drink"}
          className="flex items-center justify-center"
        >
          <Button title={"ORDER YOUR FAVORITE DRINK"}></Button>
        </Link>
      </Container>
    </Container>
  );
};

export default AllMenu;
