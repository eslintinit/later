import styled from 'styled-components'

const Flex = styled.div`
  display: flex;
  ${(props) => props.row && 'flex-direction: row'};
  ${(props) => props.column && 'flex-direction: column'};
  ${(props) => props.justifyCenter && 'justify-content: center'};
  ${(props) => props.justifyEnd && 'justify-content: flex-end'};
  ${(props) => props.justifyBetween && 'justify-content: space-between'};
  ${(props) => props.spaceBetween && 'justify-content: space-between'};
  ${(props) => props.alignCenter && 'align-items: center'};
  ${(props) => props.alignEnd && 'align-items: flex-end'};
  ${(props) =>
    props.full &&
    `
    width: 100vw;
    height: 100vh;
    `};
  ${(props) => props.fullWidth && 'width: 100%'};
`

export default Flex
