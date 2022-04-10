import React from "react";
import ReactDOM from "react-dom";

import {
  FlexBox,
  Heading,
  SpectacleLogo,
  UnorderedList,
  CodeSpan,
  OrderedList,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Stepper,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  CodePane,
  MarkdownSlide,
  MarkdownSlideSet,
  Notes,
} from "spectacle";
import { theme } from "./theme";

const formidableLogo =
  "https://avatars2.githubusercontent.com/u/5078602?s=280&v=4";

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const SlideFragments = () => (
  <>
    <Slide>
      <Text>This is a slide fragment.</Text>
    </Slide>
    <Slide>
      <Text>This is also a slide fragment.</Text>
      <Appear>
        <Text>This item shows up!</Text>
      </Appear>
      <Appear>
        <Text>This item also shows up!</Text>
      </Appear>
    </Slide>
  </>
);

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading>
          You might don't need a{" "}
          <code>
            $&#123;
            <CodeSpan color="primary" fontSize="inherit">
              libraryName
            </CodeSpan>
            &#125;
          </code>
        </Heading>
      </FlexBox>
      <Notes>
        Usually we’re tend to use libraries and think that extreme popularity
        means the reason to use. Sometimes it’s not like this. And sometimes the
        popularity of certain libraries means the lack of functionality in the
        language. That’s why underscore js and later lodash came. For example,
        Object.values isn’t supported in IE without polifylling. But now a rare
        project starts with built-in lodash.
      </Notes>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="h2">
          Why is that important?
        </Heading>
        <UnorderedList>
          <Appear>
            <ListItem>Bundle size</ListItem>
          </Appear>
          <Appear>
            <ListItem>Learning curve</ListItem>
          </Appear>
          <Appear>
            <ListItem>Maintainability</ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>You might not need...</Heading>
      <UnorderedList>
        <ListItem>
          <CodeSpan>qs</CodeSpan>
          <Appear
            inactiveStyle={{ display: "inline", opacity: 0 }}
            activeStyle={{ display: "inline", opacity: 1 }}
          >
            {" "}
            &mdash;{" "}
            <Box color="secondary" display="inline">
              5 times
            </Box>{" "}
            more downloads than React
          </Appear>
        </ListItem>
        <ListItem>
          <CodeSpan>query-string</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>querystringify</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>urijs</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>url-parse</CodeSpan>
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>URLSearchParams API</Heading>
      <OrderedList>
        <Appear>
          <ListItem>Available in Browsers and NodeJS</ListItem>
        </Appear>
        <Appear>
          <ListItem>Has similar syntax to other native APIs</ListItem>
        </Appear>
        <Appear>
          <ListItem>Decodes and encodes under the hood</ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Uses{" "}
            <CodeSpan color="secondary">
              application/x-www-form-urlencoded
            </CodeSpan>{" "}
            parsing &amp; serializing
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>Polifillable</ListItem>
        </Appear>
      </OrderedList>
    </Slide>
    <Slide>
      <Heading>From Objects and Arrays</Heading>
      <FlexBox height="100%" flexDirection="column">
        <CodePane language="jsx">{`
      const searchParams = new URLSearchParams({
        key: 'value'
      });

      searchParams.get('key')   // 'value'
      searchParams.toString()   // 'key=value'
        `}</CodePane>
        <Box height={20} />
        <Appear>
          <CodePane language="jsx">{`
      const searchParams = new URLSearchParams([
        ['key', 'value1'],
        ['key', 'value2'],
      ]);
      
      searchParams.getAll('key')  // ['value1', 'value2']
      searchParams.toString()     // 'key=value1&key=value2'
        `}</CodePane>
        </Appear>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>From string</Heading>
      <FlexBox height="100%" flexDirection="column">
        <CodePane language="jsx">{`
      const searchParams = new URLSearchParams('?hi=Mom');

      searchParams.get('hi')   // 'Mom'
        `}</CodePane>
        <Box height={20} />
        <Appear>
          <CodePane language="jsx">{`
      const searchParams = new URLSearchParams('message=An+Error%20Message');

      searchParams.get('message')   // 'An Error Message'
        `}</CodePane>
        </Appear>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading>
          Has similar API to <CodeSpan fontSize="inherit">FormData</CodeSpan>
        </Heading>
        <CodePane language="jsx">{`
      const searchParams = new URLSearchParams();

      searchParams.append('key', 'value with space')
      searchParams.append('key', 'value')

      searchParams.get('key')     // 'value'
      searchParams.getAll('key')  // ['value', 'value with space']
      searchParams.toString()     // 'key=value&key=value+with+space'
        `}</CodePane>
        <Box height={20} />
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading>Methods overview</Heading>
        <FlexBox flexDirection="row" width="100%" justifyContent="space-around">
          <CodePane overflow="hidden" width="300px" language="jsx">{`
        // iterators
        .forEach()
        .entries()
        .values()
        .keys()
        `}</CodePane>
          <CodePane overflow="hidden" width="300px" language="jsx">{`
        // read methods
        .has()
        
        .get()
        .getAll()
        `}</CodePane>
          <CodePane overflow="hidden" width="300px" language="jsx">{`
        // write methods
        .append()
        .set()
        .delete()
        .sort()
        `}</CodePane>
        </FlexBox>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Limitations</Heading>
      <UnorderedList>
        <ListItem>
          Converts spaces as{" "}
          <CodeSpan color="secondary" color="secondary">
            +
          </CodeSpan>
          , but parses <CodeSpan color="secondary">%20</CodeSpan> as well
        </ListItem>
        <ListItem>Does not support nested objects</ListItem>
        <ListItem>Does not convert arrays with commas</ListItem>
        <ListItem>
          Works in a combination with{" "}
          <CodeSpan color="secondary">new URL()</CodeSpan> API
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading>NodeJS</Heading>
        <CodePane language="jsx" width="35em" overflow="hidden" margin="auto">{`
        const querystring = require('querystring')
        `}</CodePane>
        <Appear>
          <Heading fontSize="h3">
            is deprecated since v14 in favor of{" "}
            <CodeSpan fontSize="inherit">URLSearchParams</CodeSpan>
          </Heading>
        </Appear>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>
        <CodeSpan fontSize="inherit">new URL()</CodeSpan>
      </Heading>

      <CodePane language="jsx">{`
        const myUrl = new URL('https://gorazdo.studio')
        myUrl.searchParams.set('query', 'hi')

        myUrl.origin    // 'https://gorazdo.studio'
        myUrl.protocol  // 'https:'
        myUrl.search    // '?hi=mom'
        
        myUrl.href      // 'https://gorazdo.studio/?hi=mom'
        `}</CodePane>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading>Thanks for watching</Heading>
        <Appear>
          <Heading fontSize="h3">Questions time</Heading>
        </Appear>
      </FlexBox>
    </Slide>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));
