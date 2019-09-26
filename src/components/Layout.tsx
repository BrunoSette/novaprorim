import { Link } from "gatsby";
import * as React from "react";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import { Segment, Container, Sidebar } from "semantic-ui-react";
import "../css/styles.css";
import "../css/responsive.css";
import "../css/semantic.min.css";
import "prismjs/themes/prism-okaidia.css";
import { Provider } from "react-redux";
import { store } from "../store";

export const menuItems = [
  { name: "Home", path: "/", exact: true, icon: "home", inverted: true },
  { name: "About", path: "/about/", exact: true, icon: "info circle" },
  { name: "Blog", path: "/blog/", exact: false, icon: "newspaper" }
];

export interface LayoutProps {
  location: {
    pathname: string;
  };
  children: any;
}

const Layout = (props: LayoutProps) => {
  const { pathname } = props.location;
  const isHome = pathname === "/";

  return (
    <Provider store={store}>
      <Sidebar.Pushable as={Segment}>
        <SidebarMenu
          Link={Link}
          pathname={pathname}
          items={menuItems}
          visible={false}
        />

        <Sidebar.Pusher style={{ minHeight: "100vh" }}>
          {/* Header */}
          {isHome ? null : (
            <HeaderMenu Link={Link} pathname={pathname} items={menuItems} />
          )}

          {/* Render children pages */}
          <div style={{ paddingBottom: 60 }}>{props.children}</div>

          {/* Footer */}
          <Segment
            vertical
            style={{
              position: "absolute",
              bottom: 0,
              color: "white",
              width: "100%",
              backgroundColor: "#38acd2"
            }}
          >
            <Container textAlign="center">
              <p>Prorim Serviços Médicos Nefrológicos</p>{" "}
              <p>
                Responsável Técnico: Dr. Paulo César Antunes Sette, CRM 7524
              </p>
              <p>
                Rua Padre Inglês, 288 - Boa Vista - Recife/PE Fones: (81)
                3204-1900
              </p>
            </Container>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Provider>
  );
};

export default Layout;

export const withLayout = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) =>
  class WithLayout extends React.Component<P & LayoutProps> {
    render() {
      return (
        <Layout location={this.props.location}>
          <WrappedComponent {...this.props} />
        </Layout>
      );
    }
  };
