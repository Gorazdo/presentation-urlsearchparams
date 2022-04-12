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

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading>
          You (might) don't need a{" "}
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
      <Heading>What do they do?</Heading>
      <FlexBox height="100%" flexDirection="column">
        <CodePane
          textSize={40}
          language="javascript"
          highlightRanges={[
            [3, 4],
            [6, 10],
          ]}
        >
          {`
      import qs from 'qs'

      const url = "search=How+to+use+search+params%3F&type=blog&sort=ASC"
      qs.parse(url);

      const query = {
        search: 'How to use search params?',
        type: 'blog',
        sort: 'ASC',
      }
        `}
        </CodePane>
        <Box margin="20px"></Box>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>URLSearchParams API</Heading>
      <OrderedList>
        <Appear>
          <ListItem>
            Available in{" "}
            <Text
              style={{ display: "inline" }}
              margin="0px"
              padding="0px"
              color="secondary"
            >
              modern Browsers
            </Text>{" "}
            and{" "}
            <Text
              style={{ display: "inline" }}
              margin="0px"
              padding="0px"
              color="secondary"
            >
              NodeJS
            </Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>Has a similar syntax to other native APIs</ListItem>
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
      <Heading>From Objects</Heading>
      <FlexBox height="100%" flexDirection="column">
        <CodePane language="javascript" highlightRanges={[[1, 4], 6, 7]}>{`
      const searchParams = new URLSearchParams({
        key: 'value',
        sort: 'ASC'
      });

      searchParams.get('key')   // 'value'
      searchParams.toString()   // 'key=value&sort=ASC'
        `}</CodePane>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>From Arrays</Heading>
      <FlexBox height="100%" flexDirection="column">
        <CodePane language="javascript" highlightRanges={[[1, 5], 7, 8]}>{`
      const searchParams = new URLSearchParams([
        ['colors', 'red'],
        ['colors', 'green'],
        ['colors', 'blue'],
      ]);
      
      searchParams.getAll('key')  // ['red', 'green', 'blue']
      searchParams.toString()     // 'colors=red&colors=green&colors=blue'
        `}</CodePane>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>From String</Heading>
      <FlexBox height="100%" flexDirection="column">
        <CodePane
          language="javascript"
          highlightRanges={[
            [1, 2],
            [4, 5],
            [7, 11],
          ]}
        >{`
      const string = '?hey=Mom&look%20ma=No%20Querystring'
      const searchParams = new URLSearchParams(string);

      searchParams.get('hey')   // 'Mom'
      searchParams.get('look ma')   // 'No Querystring'

      for (const pair of searchParams.entries()) {
          console.log(pair)
          // ['hey', 'Mom']
          // ['look ma', 'No Querystring']
      }
        `}</CodePane>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>
        Has a similar API as <CodeSpan fontSize="inherit">FormData</CodeSpan>
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <CodePane
          language="javascript"
          highlightRanges={[
            [3, 4],
            [6, 7],
          ]}
        >{`
      const searchParams = new URLSearchParams();

      searchParams.append('key', 'value with space')
      searchParams.append('key', 'value')

      searchParams.getAll('key')  // ['value', 'value with space']
      searchParams.toString()     // 'key=value&key=value+with+space'
        `}</CodePane>
        <Box height={20} />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Methods overview</Heading>
      <Appear>
        <CodePane
          language="typescript"
          highlightRanges={[
            [3, 9],
            [11, 14],
            [16, 18],
            [20, 24],
            [26, 29],
          ]}
        >{`
        //
    class URLSearchParams implements Iterable<[string, string]> {
      constructor(init?: 
        | URLSearchParams 
        | string 
        | { [key: string]: string | ReadonlyArray<string> | undefined } 
        | Iterable<[string, string]> 
        | ReadonlyArray<[string, string]>
      );

      // iterators
      entries(): IterableIterator<[string, string]>;
      keys(): IterableIterator<string>;
      values(): IterableIterator<string>;

      // Array-like methods
      forEach(callback: (value: string, name: string, searchParams: URLSearchParams) => void): void;
      sort(): void;

      // read
      has(name: string): boolean;
      get(name: string): string | null;
      getAll(name: string): string[];
      toString(): string;
      
      // write
      append(name: string, value: string): void;
      delete(name: string): void;
      set(name: string, value: string): void;
      
      [Symbol.iterator](): IterableIterator<[string, string]>;
    }
        `}</CodePane>
      </Appear>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column" alignItems="center">
        <Heading>Limitations</Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <Text>Does not support nested Objects and Arrays with commas</Text>
      <FlexBox height="100%" flexDirection="column" alignItems="center">
        <Appear>
          <CodePane
            language="javascript"
            highlightRanges={[
              [1, 4],
              [5, 8],
              [9, 16],
            ]}
          >{`
        {
          const searchParams = new URLSearchParams('color=red%2Cblue');
          searchParams.get('color'); // 'red,blue'
        }
        {
          const searchParams = new URLSearchParams('color=red&color=blue');
          searchParams.getAll('color'); // ['red', 'blue']
        }
        {
          const searchParams = new URLSearchParams({ 
            filter: { price: 'USD' }, 
            sort: 'ASC' 
          });
          searchParams.get('sort'); // 'ASC'
          searchParams.get('filter'); // '[object Object]'
        }
        `}</CodePane>
        </Appear>
      </FlexBox>
    </Slide>
    <Slide>
      <Text>
        Converts spaces as <CodeSpan color="secondary">+</CodeSpan>, but parses{" "}
        <CodeSpan color="secondary">%20</CodeSpan> as well
      </Text>
      <FlexBox height="100%" flexDirection="column" alignItems="center">
        <CodePane
          language="javascript"
          highlightRanges={[
            [2, 4],
            [5, 9],
          ]}
        >{`
        const searchParams = new URLSearchParams();
        searchParams.set('greeting', 'Hello there! 👋')
        searchParams.toString(); 
        // greeting=Hello+there%21+%F0%9F%91%8B
        
        const rawSearchParams = 'Hello%20there!%20%F0%9F%91%8B';
        const searchParams = new URLSearchParams(rawSearchParams);
        searchParams.get('greeting');
        // 'Hello there! 👋'
        `}</CodePane>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading>NodeJS</Heading>
        <CodePane language="javascript">{`
        const querystring = require('querystring')
        `}</CodePane>
        <Appear>
          <Heading fontSize="h3" color="primary">
            <CodeSpan color="secondary" fontSize="inherit">
              querystring
            </CodeSpan>{" "}
            is deprecated since v14 in favor of{" "}
            <CodeSpan color="secondary" fontSize="inherit">
              URLSearchParams
            </CodeSpan>
          </Heading>
        </Appear>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column" alignItems="center">
        <Heading>
          Works in a combination with{" "}
          <CodeSpan color="primary" fontSize="inherit">
            new&nbsp;URL()
          </CodeSpan>{" "}
          API
        </Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column" alignItems="center">
        <CodePane
          language="javascript"
          highlightRanges={[1, [3, 5], [6, 10], 9, 11]}
        >{`
        const myUrl = new URL('https://gorazdo.studio')

        myUrl.searchParams.append('design', 'brand identity')
        myUrl.searchParams.append('design', 'web sites')
        myUrl.searchParams.append('design', 'mobile apps')

        myUrl.origin    // 'https://gorazdo.studio'
        myUrl.protocol  // 'https:'
        myUrl.search    // '?design=brand+identity&design=web+sites&desig...'
        
        myUrl.href      // 'https://gorazdo.studio/?design=brand+identity...'
        `}</CodePane>
      </FlexBox>
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
