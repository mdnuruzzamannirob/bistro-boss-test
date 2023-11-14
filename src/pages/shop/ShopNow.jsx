import bg from "../../assets/shop/banner2.jpg";
import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover";
import Container from "../../components/Container";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./shop-now.css";
import useFetch from "../../hooks/useFetch";
import GridCardContainer from "../../components/GridCardContainer";
import OrderCard from "../shared/OrderCard";

const ShopNow = () => {
  const { data, loader } = useFetch(`/menu.json`);

  const dessertMenu = data?.filter((menu) => menu.category === "dessert") || [];
  const pizzaMenu = data?.filter((menu) => menu.category === "pizza") || [];
  const saladMenu = data?.filter((menu) => menu.category === "salad") || [];
  const soupMenu = data?.filter((menu) => menu.category === "soup") || [];
  const drinksMenu = data?.filter((menu) => menu.category === "drinks") || [];

  if (loader) {
    return (
      <p className="h-screen flex items-center justify-center">
        <span>Loading...</span>
      </p>
    );
  }
  return (
    <Container className={"mt-0"}>
      {" "}
      <Helmet>
        <title>Shop Now - Bistro Boss Restaurant</title>
      </Helmet>
      <Container className={"mt-0"}>
        <Cover
          bg={bg}
          title={"SHOP NOW"}
          subTitle={"Would you like to try a dish?"}
        ></Cover>

        <Tabs className={"mt-20"}>
          <TabList
            className={
              "flex items-center justify-center gap-6 uppercase font-medium"
            }
          >
            <Tab className={"outline-none border-none"}>Salad</Tab>
            <Tab className={"outline-none border-none"}>pizza</Tab>
            <Tab className={"outline-none border-none"}>soups</Tab>
            <Tab className={"outline-none border-none"}>desserts</Tab>
            <Tab className={"outline-none border-none"}>drinks</Tab>
          </TabList>

          <TabPanel>
            <GridCardContainer>
              {saladMenu?.map((data) => (
                <OrderCard key={data.id} data={data}></OrderCard>
              ))}
            </GridCardContainer>
          </TabPanel>
          <TabPanel>
            <GridCardContainer>
              {pizzaMenu?.map((data) => (
                <OrderCard key={data.id} data={data}></OrderCard>
              ))}
            </GridCardContainer>
          </TabPanel>
          <TabPanel>
            <GridCardContainer>
              {soupMenu?.map((data) => (
                <OrderCard key={data.id} data={data}></OrderCard>
              ))}
            </GridCardContainer>
          </TabPanel>
          <TabPanel>
            <GridCardContainer>
              {dessertMenu?.map((data) => (
                <OrderCard key={data.id} data={data}></OrderCard>
              ))}
            </GridCardContainer>
          </TabPanel>
          <TabPanel>
            <GridCardContainer>
              {drinksMenu?.map((data) => (
                <OrderCard key={data.id} data={data}></OrderCard>
              ))}
            </GridCardContainer>
          </TabPanel>
        </Tabs>
      </Container>
    </Container>
  );
};

export default ShopNow;
