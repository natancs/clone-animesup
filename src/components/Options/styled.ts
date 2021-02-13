import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  max-width: 1200px;
  margin: 40px 40px 0px 50px;
  padding-bottom: 20px;
  border-bottom: ${props => props.border ? '1px solid rgba(37,37,37,.7)' : '0'} ;
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-left: 3.5px solid #f00;
  padding-left: 10px;
  padding-right: 20px;
`;

export const Title = styled.div`
  font-size: 21px;
`;

export const ContentViews = styled.div`
  display: flex;
`;

export const ViewAll = styled.div`
  span {
    font-size: 14px;
    color: #aaa;
  }

  a {
    display: inline-block;
    text-decoration:none;
    color: #fff;
    background-color: #f00;
    border-radius: 3px;
    font-size: 12px;
    padding: 2px 7px;
    margin: 0 10px;
  }
`;

export const ButtonSControll = styled.div`

`;

export const ContentBody = styled.div`
  display:flex;
  width:100%;
  overflow:hidden;
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'} ;
`;




