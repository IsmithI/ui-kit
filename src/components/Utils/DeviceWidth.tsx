import * as React from "react";

type Breakpoints = "xs" | "sm" | "md" | "lg";

interface IDeviceWidth {
  breakOn: Breakpoints;
  hidden?: boolean;
}

export class DeviceWidth extends React.Component<IDeviceWidth> {
  state: {
    breakpoint: Breakpoints;
  };

  constructor(props: IDeviceWidth) {
    super(props);

    this.state = {
      breakpoint: getBreakpoint(),
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.update);
  }

  update = () => {
    const breakpoint = getBreakpoint();
    if (this.state.breakpoint !== breakpoint) this.setState({ breakpoint });
  };

  componentWillUnmount(): void {
    window.removeEventListener("resize", this.update);
  }

  render() {
    const { breakpoint } = this.state;
    const { children, hidden, breakOn } = this.props;

    return (
      (hidden ? breakpoints[breakpoint] < breakpoints[breakOn] : breakpoints[breakpoint] >= breakpoints[breakOn]) &&
      children
    );
  }
}

export function getBreakpoint(): Breakpoints {
  let searched: any = "xs";
  for (const key in breakpoints) {
    if (breakpoints.hasOwnProperty(key)) {
      const breakpoint = breakpoints[key];
      if (window.innerWidth > breakpoint) searched = key;
    }
  }

  return searched;
}

export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};
