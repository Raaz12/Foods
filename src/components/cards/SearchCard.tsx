import {Image, Pressable, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

const SearchCard = ({onChangeText, value, style, onFilter}: any) => {
  const filterImg = require('../../assets/images/filter.png');
  const url =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAY1BMVEX///8AAAD7+/vr6+v4+Pjm5uZoaGjPz8/w8PDd3d0qKirT09MxMTGNjY2+vr7z8/NbW1t0dHQVFRU/Pz+ysrK4uLgjIyMMDAwcHBzJycmUlJSoqKhPT0+ioqI2NjaBgYFGRkYQ8dtUAAAD/klEQVRogb1ZiZKrIBCMt3jiFU3iRv//K18iRwwCDhhfV23VFtEW5+gZxstFBw9Fj2rMrrXTD0kT5h0KfO0NYKDHNDoikuqvOMxcFvi6YSbo59w7tOk/BTFDdbOl9vPnDvdr+2FqRd3WAlGdNHOTDb2wHJobB1VfG6webXdLURygW9G292z9Y/Yw5L6t3FiHhSdEXozybPUGk2tA7T5WPlOFHLo3/CIcwMk/JsG6cAg+wdQgIHUwgqjfiHNmvr6FcbO3HVqAKdOQ7QTkVrbvJgLtxZ+Y3/cTymX2xmBpegzkjmQ3n+6UOzeQvRuNymbHjJ2JATkCmlShdkcRTfnJiPt1Hw2aXHNNiSE7kIG9sSYIqMFnk2z+vjVRbiuAel0Cn0bZXXUBjVhYrokoiVMThQ6kxCvYwihvtFqf5rs+0cKnsiH90SO/VZbcPJekWyf6OVjVxAUu0bBRFjCzVfqsgZQCRpPzUKszqOxCrFJbhgoBCYkmFtdpEti78w1iF2dTUKmwWXdQC7xRLqnkocOh7o8pDBaXiaxVBzvjbgn1RFwmvvg7xn1Jl3gZxGV8QLM+CJI3Sy+KF2lou4Pk7lOaLOSRh08LjdQAi7GutorIIY/Fxc1PaMenRCiNC+dM8vo3ZpEH3fU3Dp2lIpL9JBRJRG/ifPxhEtWlsDz9Jv0X617FZdIYGJ2cJCiWiM42zySxuCkiZiDlbBSXibUc+9r/hofldbgMDxd/Xua2FYcUkY3OG4FYBYvB8uqX6uNFNFGFHJViZQsMQLww1LI0J3bJDmgX6U7GrVV462/v0mhQvzvtI7ctDRDsfnke0m4xtCS/OToFoY8GHLOlIGr7VL04kQBntjJMrt34hZ+4bAxDxz/qo+IloOM482Cnia+tNoWz93IKbnr41x3PP0MLM6f6dEYjzZ8V6EG4NxlbsNlSv8PNZwtODi5KBfUUoHfw2LywAlYlPjnVG5wAsYEbaMAQsBGXA5sARQm9uJ72JNJtZ2cFSE9V8jt67YjcLb5mug6s7ylzfnn9p9q912F+VXY1YL+spvIZ/pOITVetDDKilP0LagijL2PWeYQQ8mK/9AKE0q5Z/5i8HclyFJbcXu58o09mXIXjcxDWMbFbytZh/SbC4pBfgqZlOsjZgcl9m7TEr0RbmxixTxxQ2Uvvmt1X0bd6B+wHuDBF0yiG88uJeJJkDJ+OGxQEN+0e00hDOWlwlXepXNbMYubzgNJ7IXj9xaVm+hAkVuxABCw/IBppzl6fuXePfZeAlxsD8K81RzpmJbznqexMjI+dglTsPJvOsPtn7z/6WP0f2WOeTWdYpmRf7U7JpphaZjNm/A07PaqcQn6Jq9Mk7PL+uj8Muf8PCNosHIKQh9kAAAAASUVORK5CYII=';
  return (
    <View style={styles.input_style}>
      <Image source={{uri: url}} style={{height: 18, width: 18}} />
      <TextInput
        style={{flex: 1}}
        onChangeText={onChangeText}
        placeholder="Search items"
        value={value}
      />
      <Pressable
        style={{padding: 4}}
        onPress={() => {
          onFilter();
        }}>
        <Image source={filterImg} style={{height: 18, width: 18}} />
      </Pressable>
    </View>
  );
};

export default SearchCard;

const styles = StyleSheet.create({
  input_style: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 38,
    borderWidth: 0.4,
    paddingHorizontal: 16,
    margin: 10,
    borderRadius: 8,
    borderColor: '#2f2f2f',
    backgroundColor: '#FFF',
    gap: 10,
  },
});
