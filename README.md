# @testingrequired/wdvm

## Installation

1. Clone this repo locally
1. Run `$ npm install && npm link`
1. Add `~/.wdvm` to PATH

## Usage

```bash
$ wdvm browser version platform
```

### Supported Browsers

- `chrome`
- `firefox`

### Examples

```bash
$ wdvm chrome 71 win32
```

## Configuration

Configuration can be defined in `~/.wdvmrc.json`

### `dest`

Absolute paths to where the webdriver binaries are installed.

```json
{
  "dest": ""
}
```

Defaults to: `~/.wdvm`
