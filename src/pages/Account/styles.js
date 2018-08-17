import styled from 'styled-components'
import { colors } from '~/constants'

export default styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;

  .avatar {
    margin-top: 30px;
    width: 90px;
    height: 90px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    overflow: hidden;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0px 5%;
    margin: 15px auto 0px auto;
    max-width: 700px;
  }

  .description {
    margin-top: 15px;
  }

  .log-out {
    margin: 28px auto 30px auto;
    padding: 6px 11px 7px 11px;
    border: 1px solid ${ colors.RED };
    border-radius: 2px;
    color: ${ colors.RED };
  }

`