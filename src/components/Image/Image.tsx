import * as React from "react";
import cn from "classnames";

const styles = require("./Image.scss");
const loadingSrc = require("./nophoto.png");
const errorSrc = require("./loadingError.png");

interface IImage {
  src: string;
  alt?: string;
}

export class Image extends React.Component<IImage> {
  state = {
    loaded: false,
    error: false,
  };

  render() {
    const { loaded, error } = this.state;
    const { src, alt } = this.props;
    const classes = cn(styles.image, {
      [styles.loading]: !loaded,
      [styles.error]: error,
    });
    const source = error ? errorSrc : loaded ? src : loadingSrc;

    return (
      <div className={classes}>
        <img src={source} alt={alt || src} onError={this.handleImageError} onLoad={this.handleImageLoaded} />
      </div>
    );
  }

  componentDidUpdate(prevProps: Readonly<IImage>, prevState: Readonly<{}>, snapshot?: any): void {
    if (prevProps.src !== this.props.src) {
      this.setState({
        loaded: false,
        error: false,
      });
    }
  }

  handleImageLoaded = () => {
    this.setState({ loaded: true });
  };

  handleImageError = () => {
    this.setState({ error: true });
  };
}
