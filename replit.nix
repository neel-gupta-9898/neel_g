{ pkgs }: {
  deps = [
    pkgs.mkinitcpio-nfs-utils
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
  ];
}