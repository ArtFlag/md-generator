# Markdown file generator

Want to test your static website generator? You might be able to use this dirty tool.

## Usage

1. Download md-generator or clone the repo.
1. To generate `n` files, run:

```bash
node md-generator.js -n <number> -f <output folder>
```

## Examples

- Generate 2 files in the `generated_files` (default) folder:

  ```bash
  node md-generator.js -n 2
  ```

- Generate 100 files in the `output` folder:

  ```bash
  node md-generator.js -n 100 -f output
  ```
