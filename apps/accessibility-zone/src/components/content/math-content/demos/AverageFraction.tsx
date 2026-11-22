/**
 * 회차당 평균 참가자 m = (a + b) / n의 MathML 원문. 화면 표기와 코드 예시가 이 문자열 하나를 쓴다.
 * React 타입에 MathML 요소가 없어 고정 문자열을 그대로 넣는다.
 */
export const averageMathml = `<math display="block">
  <mrow>
    <mi>m</mi><mo>=</mo>
    <mfrac>
      <mrow><mi>a</mi><mo>+</mo><mi>b</mi></mrow>
      <mi>n</mi>
    </mfrac>
  </mrow>
</math>`;

export const AverageFraction = () => <span dangerouslySetInnerHTML={{ __html: averageMathml }} />;
