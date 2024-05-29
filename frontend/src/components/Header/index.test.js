import Header from './'
import { render } from '@testing-library/react'
import {
  ConnexionProvider,
  QuestionListProvider,
  SelectedAnswerProvider,
  ErrorProvider,
  ScoreProvider,
  ThemeProvider,
  TimeProvider,
  IdProvider,
  FaceScoreProvider,
  SoundProvider,
} from '../../utils/context/index'

import { BrowserRouter as Router } from 'react-router-dom'

describe('Header', () => {
  test('Should render without crash', async () => {
    render(
      <Router>
        <ConnexionProvider>
          <SelectedAnswerProvider>
            <QuestionListProvider>
              <ErrorProvider>
                <ScoreProvider>
                  <ThemeProvider>
                    <TimeProvider>
                      <IdProvider>
                        <FaceScoreProvider>
                          <SoundProvider>
                            <Header />
                          </SoundProvider>
                        </FaceScoreProvider>
                      </IdProvider>
                    </TimeProvider>
                  </ThemeProvider>
                </ScoreProvider>
              </ErrorProvider>
            </QuestionListProvider>
          </SelectedAnswerProvider>
        </ConnexionProvider>
      </Router>
    )
  })
})
