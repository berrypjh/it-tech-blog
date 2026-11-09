import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocH3, DocTable, ExternalLink } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';

import { Exercise } from '@/components/shared/Exercise';

import { getToc } from '../toc';

const GOOGLE = 'https://developers.google.com/machine-learning/intro-to-ml/supervised';
const HF = 'https://huggingface.co/docs/transformers/tasks/language_modeling';

const content = {
  ko: {
    intro: (
      <>
        학습(training)은 모델에 입력과 <strong>표적</strong>(정답으로 삼을 값)을 보여 주고, 모델의
        예측이 표적과 얼마나 다른지 비교해 그 차이가 줄도록 모델의 숫자를 조정하는 일입니다. 지도
        학습과 자기지도 학습은 이 과정이 같고, 표적을 어디서 얻는지가 다릅니다.
      </>
    ),
    supervisedHeading: '지도 학습: 사람이 붙인 라벨이 표적이다',
    supervised: (
      <>
        <ExternalLink href={GOOGLE}>Google의 기계학습 입문 과정</ExternalLink>은 라벨(label)을
        모델이 예측하기를 바라는 값, 곧 &quot;정답&quot;으로 설명합니다. 지도 학습은 라벨이 붙은
        예시로 모델을 학습시킵니다. IT 문의라면 상담원이 과거 문의를 읽고 붙인 담당 큐가 라벨입니다.
      </>
    ),
    selfHeading: '자기지도 학습: 원문에서 표적을 만든다',
    self: (
      <>
        <ExternalLink href={HF}>Hugging Face의 언어 모델링 안내</ExternalLink>는 인과 언어
        모델(causal language model)이 앞쪽 토큰만 보고 다음 토큰을 예측한다고 설명합니다. 같은
        안내는 이 작업에 라벨이 필요 없다고 쓰는데, 그 이유를 &quot;다음 단어가 곧 라벨&quot;이기
        때문이라고 듭니다. 실제 코드에서도 입력 토큰을 복사해 한 칸 밀어 표적으로 씁니다.
      </>
    ),
    selfAfter:
      '그러니까 "라벨이 필요 없다"는 말은 사람이 붙인 라벨이 필요 없다는 뜻입니다. 표적이 없다는 뜻이 아닙니다. 이렇게 데이터 자체에서 표적을 만드는 방식을 자기지도 학습이라고 부릅니다. 같은 방식을 비지도 학습이라고 부르는 자료도 있습니다.',
    figureLabel: '원문 한 문장에서 만드는 다음 토큰 표적 (가상 · 토큰은 단순화)',
    shifts: [
      { input: 'VPN이', target: '연결되지' },
      { input: 'VPN이 연결되지', target: '않아요' },
    ],
    inputLabel: '입력',
    targetLabel: '표적',
    caption: '같은 문의 문장에서 만든 두 가지 학습 예시 (교육 예시)',
    head: ['구분', '큐 분류 · 지도 학습', '다음 토큰 학습 · 자기지도 학습'],
    rows: [
      ['입력', '문의 전체 "VPN이 연결되지 않아요"', '앞부분 토큰 "VPN이 연결되지"'],
      ['표적', '담당 큐 라벨 network', '바로 다음 토큰 "않아요"'],
      ['표적을 만든 주체', '상담원이 문의를 읽고 붙임', '원문에서 한 칸 뒤의 토큰을 그대로 가져옴'],
      ['문장 하나에서 얻는 예시', '라벨 하나', '토큰 위치마다 하나씩 여러 개'],
      [
        '학습 뒤에 하는 일',
        '정해진 큐 목록 가운데 하나를 고름',
        '다음 토큰을 이어 붙여 텍스트를 생성함',
      ],
    ],
    pitfallTitle: '자기지도 학습에도 표적이 있습니다',
    pitfall:
      '예측과 표적을 비교해 조정한다는 점은 지도 학습과 같습니다. 다른 것은 표적을 사람이 붙였는지, 원문에서 기계적으로 만들었는지입니다.',
    exerciseTitle: '두 축에 놓아 보기',
    question: (
      <>
        <p>아래 세 가지를 과업(분류 · 생성)과 학습 신호(지도 · 자기지도) 두 축에 놓아 보세요.</p>
        <List ordered marker className="flex flex-col gap-2xs">
          <ListItem>상담원이 큐를 붙인 과거 문의로 학습한 큐 분류기</ListItem>
          <ListItem>사내 문서 원문으로 다음 토큰을 맞히게 학습한 언어 모델</ListItem>
          <ListItem>2번 모델에게 큐 이름을 출력하게 한 01.1의 기능</ListItem>
        </List>
      </>
    ),
    answerLabel: '풀이 보기',
    answers: [
      '1번은 과업이 분류이고 학습 신호는 지도 학습입니다. 표적은 상담원이 붙인 큐 라벨입니다.',
      '2번은 과업이 텍스트 생성(언어 모델링)이고 학습 신호는 자기지도 학습입니다. 표적은 원문의 다음 토큰입니다.',
      '3번은 용도가 분류이지만 모델이 하는 일은 여전히 텍스트 생성입니다. 학습 신호는 사전학습 기준으로 자기지도 학습입니다. 상담원 라벨로 추가 학습을 했다면 그 단계에는 지도 학습이 더해집니다. 한 모델이 여러 학습 단계를 거칠 수 있어서, 학습 신호는 단계마다 따로 적습니다.',
    ],
  },
  en: {
    intro: (
      <>
        Training shows a model an input and a <strong>target</strong> (the value to treat as the
        answer), compares how far the model’s prediction is from the target, and adjusts the model’s
        numbers to shrink that gap. Supervised and self-supervised learning share this process; they
        differ in where the target comes from.
      </>
    ),
    supervisedHeading: 'Supervised: the target is a label people assigned',
    supervised: (
      <>
        <ExternalLink href={GOOGLE}>Google’s introduction to machine learning</ExternalLink>{' '}
        describes a label as the value we want the model to predict, the &quot;answer&quot;.
        Supervised learning trains a model on labeled examples. For IT requests, the queue an agent
        assigned after reading a past request is the label.
      </>
    ),
    selfHeading: 'Self-supervised: the target is made from raw text',
    self: (
      <>
        <ExternalLink href={HF}>Hugging Face’s language modeling guide</ExternalLink> explains that
        a causal language model predicts the next token while seeing only the tokens to its left.
        The same guide says this task needs no labels, and gives the reason that &quot;the next word
        is the label&quot;. In the actual code, the input tokens are copied and shifted by one to
        serve as the target.
      </>
    ),
    selfAfter:
      'So "no labels needed" means no labels assigned by people. It does not mean there is no target. Making the target from the data itself like this is called self-supervised learning. Some sources call the same approach unsupervised.',
    figureLabel: 'Next-token targets made from one raw sentence (fictional · tokens simplified)',
    shifts: [
      { input: 'My VPN', target: 'won’t' },
      { input: 'My VPN won’t', target: 'connect' },
    ],
    inputLabel: 'Input',
    targetLabel: 'Target',
    caption: 'Two training examples made from the same request sentence (fictional data)',
    head: ['Aspect', 'Queue classification · supervised', 'Next-token learning · self-supervised'],
    rows: [
      ['Input', 'The whole request "My VPN won’t connect"', 'The leading tokens "My VPN won’t"'],
      ['Target', 'The queue label network', 'The very next token "connect"'],
      [
        'Who made the target',
        'An agent read the request and assigned it',
        'Taken as is from the token one step later in the raw text',
      ],
      ['Examples from one sentence', 'One label', 'Several, one per token position'],
      [
        'What it does after training',
        'Picks one of a fixed list of queues',
        'Generates text by appending next tokens',
      ],
    ],
    pitfallTitle: 'Self-supervised learning has a target too',
    pitfall:
      'Comparing prediction with target and adjusting is the same as in supervised learning. What differs is whether people assigned the target or it was made mechanically from raw text.',
    exerciseTitle: 'Place them on two axes',
    question: (
      <>
        <p>
          Place the three below on two axes: task (classify · generate) and learning signal
          (supervised · self-supervised).
        </p>
        <List ordered marker className="flex flex-col gap-2xs">
          <ListItem>
            A queue classifier trained on past requests that agents labeled with a queue
          </ListItem>
          <ListItem>
            A language model trained to predict the next token of raw internal documents
          </ListItem>
          <ListItem>The 01.1 feature that has model 2 output a queue name</ListItem>
        </List>
      </>
    ),
    answerLabel: 'Show solution',
    answers: [
      'Item 1 has the task of classification and a supervised learning signal. The target is the queue label an agent assigned.',
      'Item 2 has the task of text generation (language modeling) and a self-supervised learning signal. The target is the next token of the raw text.',
      'Item 3 is used for classification, but what the model does is still text generation. Its learning signal, for pretraining, is self-supervised. If it was further trained on agent labels, that stage adds supervised learning. One model can go through several training stages, so write down the learning signal per stage.',
    ],
  },
};

/** 지도 학습과 자기지도 학습을 표적의 출처로 비교하고, 두 축에 놓는 과제와 해설을 둔다. */
export const SignalSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.signal.id}>
      <DocH2 {...toc.signal} />
      <p>{c.intro}</p>

      <DocH3>{c.supervisedHeading}</DocH3>
      <p>{c.supervised}</p>

      <DocH3>{c.selfHeading}</DocH3>
      <p>{c.self}</p>
      <figure className="my-lg rounded-md border border-stroke-light bg-background-surface p-md leading-normal">
        <figcaption className="mb-sm text-xxsm font-semiBold text-text-light">
          {c.figureLabel}
        </figcaption>
        <List className="flex flex-col gap-xs text-xsm">
          {c.shifts.map((shift) => (
            <ListItem key={shift.input} className="flex flex-wrap gap-x-md gap-y-2xs">
              <span>
                <span className="text-text-light">{c.inputLabel} </span>
                {shift.input}
              </span>
              <span>
                <span className="text-text-light">{c.targetLabel} </span>
                <strong className="text-text-primary">{shift.target}</strong>
              </span>
            </ListItem>
          ))}
        </List>
      </figure>
      <p>{c.selfAfter}</p>

      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <Callout variant="pitfall" title={c.pitfallTitle}>
        <p>{c.pitfall}</p>
      </Callout>

      <Exercise
        title={c.exerciseTitle}
        question={c.question}
        answerLabel={c.answerLabel}
        answer={c.answers.map((answer) => (
          <p key={answer}>{answer}</p>
        ))}
      />
    </section>
  );
};
