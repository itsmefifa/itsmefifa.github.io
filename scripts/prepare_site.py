"""Stage only referenced public files for GitHub Pages. No dependencies or bundler."""
from pathlib import Path
import shutil
from validate_site import ROOT, collect_site


def main():
    _, files, _, errors = collect_site()
    if errors:
        raise SystemExit('\n'.join(errors))
    output = ROOT / 'dist'
    # Before recursive cleanup, verify the exact absolute workspace target.
    if output.is_symlink() or output.resolve() != ROOT.resolve() / 'dist':
        raise SystemExit('Refusing to clean a staging directory outside the workspace.')
    if output.exists():
        shutil.rmtree(output)
    output.mkdir()
    for source in sorted(files):
        destination = output / source.relative_to(ROOT)
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(source, destination)
    (output / '.nojekyll').touch()
    print(f'Staged {len(files)} public files in {output}.')


if __name__ == '__main__':
    main()
