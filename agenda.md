# Agenda

## declare

You can use declare anywhere in your project to introduce support for global or other "magically" appearing variables.

## `any`

You can use `any` for values which you're likely to be changing rapidly and don't want to commit to a paticular type.

## `ts-ignore`

You can use `ts-ignore` to tell typescript to ignore errors that originate from the following line.

## tslint:disable-next-line

You can use `tslint:disable-next-line` to tell tslint to ignore errors on the following line. You can additionally scope this instruction to the paticular linting rule by following it with the rule name, either space or colon seperated (ie. `tslint:disable-next-line:no-any` and `tslint:disable-next-line no-any`)
