import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Search.style';

class Search extends React.Component {
  constructor(props) {
    super(props);

    const { match: { params: { query } } } = this.props;
    this.state = { query };
    this.query = React.createRef();
    this.change = this.change.bind(this);
  }

  change() {
    this.setState({ query: this.query.current.value });
  }

  render() {
    const { query } = this.state;
    return (
      <S.Main>
        <S.Title>Find the best time for a subreddit</S.Title>
        <S.Section>
          <S.Paragraph>r /</S.Paragraph>
          <S.Textbox onChange={this.change} ref={this.query} placeholder="javascript" />
          <S.Button href={`/search/${query}`}>Search</S.Button>
        </S.Section>
      </S.Main>
    );
  }
}

Search.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      query: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Search;
