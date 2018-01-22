// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Convert a String or a FormattedMessage
 * element into a string
 *
 * @param  {Object}        context - The React `context`
 * @param  {String|Object} value   - A String or a FormattedMessage
 *                                   element
 * @return {String}
 */
export function parseI18NString (context, value) {
  if (!context.intl) {
    console.warn(`remember to add:
        static contextTypes = {
          intl: React.PropTypes.object.isRequired
        };
    to your component`);
    return value;
  }

  const textValue = typeof value !== 'string' && (value && value.props)
    ? context.intl.formatMessage(value.props, value.props.values || {})
    : value || '';

  return textValue;
}
